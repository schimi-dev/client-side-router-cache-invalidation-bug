# Reproduction Scenario

1) Being on `/dashboard` navigate to the `/dashboard/[id]` page of a specific resource.
2) Edit the resource on the `/dashboard/[id]` page via a Server Action that calls `revalidatePath("/")`.
3) Navigate back to the Master page via a Link .

**Result:** Then the Master Page shows stale data.  
**Expected:** The Master Page should show the updated data.

In my opinion, from how I understand the docs, the Master Page should not have stale data. Using `revalidatePath("/")` should invalidate all dynamic segments underneath. Via the route segment config it is ensured that both of the segments in the reproduction example are dynamic segments.

This example worked until `v13.4.11-canary.0`. Starting with `v13.4.11-canary.1` this problem is present. This can be tested when changeing the corresponding `next` version in this project.

From my (almost entirely blackbox-like) perspective there was a similar problem until `v13.4.5` related to prefetching that was solved by: https://github.com/vercel/next.js/pull/50848

Version `v13.4.11-canary.1` has a pull request that looks to me like a similar area: https://github.com/vercel/next.js/pull/52949

Is it possible that this problem was unintentionally (re-)introduced by that pull request?
