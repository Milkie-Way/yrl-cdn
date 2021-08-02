gh pr create -R https://github.com/Milkie-Way/yrl-cdn.git -H dev -B staging --title "staging Release" --body "staging Release"

gh pr create -R https://github.com/Milkie-Way/yrl-cdn.git -H dev -B prod --title "prod Release" --body "prod Release"



gh pr merge https://github.com/Milkie-Way/yrl-lp/pull/ -m --delete-branch=false
