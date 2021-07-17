gh pr create -R https://github.com/Milkie-Way/yrl-cdn.git -H dev -B staging --title "staging Release" --body "Staging Release"
gh pr create -R https://github.com/Milkie-Way/yrl-cdn.git -H staging -B prod --title "prod Release" --body "prod Release"


gh pr merge https://github.com/Milkie-Way/yrl-lp/pull/99 -m --delete-branch=false
