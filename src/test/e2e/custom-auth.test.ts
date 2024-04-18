import dbInit, { type ITestDb } from './helpers/database-init';
import { setupAppWithCustomAuth } from './helpers/test-helper';
import {
    type IUnleashServices,
    type IUnleashStores,
    RoleName,
} from '../../lib/types';

let db: ITestDb;
let stores: IUnleashStores;

const preHook = (
    app,
    config,
    {
        userService,
        accessService,
    }: Pick<IUnleashServices, 'userService' | 'accessService'>,
) => {
    app.use('/api/admin/', async (req, res, next) => {
        const role = await accessService.getPredefinedRole(RoleName.EDITOR);
        req.user = await userService.createUser({
            email: 'editor2@example.com',
            rootRole: role.id,
        });
        next();
    });
};

beforeAll(async () => {
    db = await dbInit('custom_auth_serial');
    stores = db.stores;
});

afterAll(async () => {
    await db.destroy();
});

test('Using custom auth type without defining custom middleware causes default DENY ALL policy to take effect', async () => {
    jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());
    const { request, destroy } = await setupAppWithCustomAuth(
        stores,
        undefined,
    );
    await request
        .get('/api/admin/features')
        .expect(401)
        .expect((res) => {
            expect(res.body.error).toBe(
                'You have to configure a custom authentication middleware. Read https://docs.getunleash.io/docs/reference/deploy/configuring-unleash for more details',
            );
        });
    await destroy();
});

test('If actually configuring a custom middleware should configure the middleware', async () => {
    expect.assertions(0);
    const { request, destroy } = await setupAppWithCustomAuth(stores, preHook);
    await request.get('/api/admin/features').expect(200);
    await destroy();
});
