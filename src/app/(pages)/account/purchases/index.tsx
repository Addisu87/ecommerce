import { getMeUser } from '../../../_utilities/getMeUser'

const Purchases = async () => {
  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.',
    )}&redirect=${encodeURIComponent('/account')}`,
  })

  return (
    <div>
      <Fragment>
        <RenderParams className={classes.params} />

        <LowImpactHero
          type="lowImpact"
          media={null}
          richText={[
            {
              type: 'h1',
              children: [
                {
                  text: 'Account',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'This is your account dashboard. Here you can update your account information, view your purchased products, and browse your order history. To manage all users, ',
                },
                {
                  type: 'link',
                  url: '/admin/collections/users',
                  children: [
                    {
                      text: 'login to the admin dashboard.',
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <Gutter className={classes.account}>
          <HR />
          <h2>Purchased Products</h2>
          <p>
            These are the products you have purchased over time. This provides a way for you to
            access digital assets or gated content behind a paywall. This is different from your
            orders, which are directly associated with individual payments.
          </p>
          <div>
            {user?.purchases?.length || 0 > 0 ? (
              <ul className={classes.purchases}>
                {user?.purchases?.map((purchase, index) => {
                  return (
                    <li key={index} className={classes.purchase}>
                      {typeof purchase === 'string' ? (
                        <p>{purchase}</p>
                      ) : (
                        <h4>
                          <Link href={`/products/${purchase.slug}`}>{purchase.title}</Link>
                        </h4>
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className={classes.noPurchases}>You have no purchases.</div>
            )}
          </div>
          <HR />
          <h2>Orders</h2>
          <p>
            These are the orders you have placed over time. Each order is associated with an payment
            intent. As you order products, they will appear in your "purchased products" list.
          </p>
          <Button
            className={classes.ordersButton}
            href="/orders"
            appearance="primary"
            label="View orders"
          />
          <HR />
          <Button href="/logout" appearance="secondary" label="Log out" />
        </Gutter>
      </Fragment>
    </div>
  )
}

export default Purchases