/* Problem Statement2:
You are given a score log of a football match between two teams. Every time when one of the teams scored a goal,
the name of that team was written in the score log on a separate line.
At the end of the match, the team that scored strictly more goals than the other team wins the match. If both teams
score an equal number of goals, the match ends in a tie. Determine the name of the winning team or that the match
ended in a tie.
Input
• The first line of the input contains a single integer T denoting the number of test cases. The description of T test
cases follows.
• The first line of each test case contains a single integer n denoting the number of records in the score log (the
total number of goals scored during the match).
• Each of the following n lines contains a string s denoting the name of the team that scored a goal.
Output
• For each test case, print a single line containing one string — the name of the winning team or "Draw" (without
quotes) in case of a tie.
Constraints
• 1 ≤ T ≤ 10
5
• 0 ≤ n ≤ 10
5
• 1 ≤ |s| ≤ 20
• s consists only of lowercase English letters
• sum of n over all test cases ≤ 10
5

• for each test case, there are at most two different team names
Sample Input 1
2
4
ab
bc
bc
ab
3
xxx
yyy
yyy
Sample Output 1
Draw
yyy */



function main() {
  let t = 2
  while (t--) {
    let n = 5
    let s = ['ab','bc','bc','ab','bc'];

    // for (let i = 0; i < n; i++) {
    //   s[i] = s;
    // }

    var two;
    var team1 = 0,
        team2 = 0;

    for (let i = 0; i < n; i++) {
      if (s[i] == s[0]) team1++;
      else {
        two = s[i];
        team2++;
      }
    }

    if (team1 == team2) console.log("Draw");
    else if (team1 > team2) console.log(s[0]);
    else console.log(two);
  }
}

main();
