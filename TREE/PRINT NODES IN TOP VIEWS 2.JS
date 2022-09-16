/*   1
   /   \
 2     3
      /  \
     5   6
    /  \
   7    8 */

   
class treeNode
{
    constructor(data)
    {
        this.data=data;
        this.left = this.right = null;
        this.hd = 0;
    }
}
 
function getTopview(root)
{
    if(root == null)
        return;
    let q = [];
    let m = new Map();
    let hd = 0;
    root.hd = hd;
    q.push(root);
     
    while(q.length!=0)
    {
        root = q[0];
        hd = root.hd;
        if(!m.has(hd))
            m.set(hd,root.data);
        if(root.left)
        {
            root.left.hd = hd - 1;
            q.push(root.left);
        }
        if(root.right)
        {
            root.right.hd = hd + 1;
            q.push(root.right);
        }
        q.shift()
    }
     
    let arr = Array.from(m);
    arr.sort(function(a,b){return a[0]-b[0];})
     
    for (let [key, value] of arr.values())
    {
        console.log(value);
    }
}
 
let root = new treeNode(1)
root.left = new treeNode(2)
root.right = new treeNode(3)
root.right.left = new treeNode(5)
root.right.right = new treeNode(6)
root.right.left.left = new treeNode(7)
root.right.left.right = new treeNode(8)

getTopview(root)
