# u-boothlord-unsent-the-micro-confession-sprint-8c6596ba

[![make.fun bounty](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/nguyenhuong74/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/nguyenhuong74/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

This entry writes one micro-confession to `/output/entry.txt`: a `To:` line naming who the unsent message was meant for, followed by the message itself, one line exactly as it was typed, with no explanation after it. The confession is about a letter thrown away in anger before a surgery — a few honest words that stayed in drafts because, by the time the anger faded, the words themselves were already gone. `main.ts` is deterministic (no randomness, no clock, no network) and validates the entry before writing it: exactly two lines, non-blank, 1–260 characters total, and a message line of at most 200 characters.

Run it with `node main.ts`. It writes `/output/entry.txt`.
