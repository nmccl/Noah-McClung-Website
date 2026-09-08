export type Article = {
  number: string
  slug: string
  title: string
  dek: string
  date: string
  body: string
}

export const writing: Article[] = [
  {
    number: '01',
    slug: 'on-momentum',
    title: 'On Momentum',
    dek: 'Building solo software is mostly a war against your own attention span.',
    date: '2026-09-01',
    body: `Every indie project starts the same way: an idea shows up uninvited, usually while doing something else, and won't leave. The only cure is to build it. That's the fun part. The hard part comes later, somewhere around week three, when the idea has turned into a few hundred files and the original excitement has to be replaced with something more durable.

I've come to think momentum is the actual product of solo development — not the app, not the code, but whether you're still moving on day forty. **Motivation is a bad engine.** It's strong at the start and gone by Tuesday. What holds up is smaller and duller: a habit of opening the project even on days you don't feel like it, and a habit of shipping *something* — a fixed bug, a cleaner screen, a deleted feature — every time you do.

> The work doesn't get easier. You just get better at doing it anyway.

Working alone also means there's no one to notice if you drift. No standup, no reviewer, no one asking why a feature took three weeks longer than it should have. That's the appeal of building solo, and it's also the risk — the only feedback loop is the one you build for yourself. I've found the simplest version works best: keep a running log of what shipped, not what's planned. Plans are cheap. A dated line that says *what changed* is the only thing that proves the project is actually moving.

## The rebuild instinct

There's a particular moment in every project where the right move is to throw out a chunk of working code because you finally understand the problem better than you did when you wrote it. It never feels efficient in the moment. It's usually correct. The version of the code written with real understanding is almost always smaller than the version written while still figuring things out.

None of this is a system, exactly. It's closer to a set of habits that keep the project alive long enough to find out if it was a good idea in the first place. Most days, that's the whole job.`,
  },
]
