  // Javascript program to delete element in binary tree
     
  class Node
  {
      constructor(key) {
         this.left = null;
         this.right = null;
         this.key = key;
      }
  }
   
  let root;
  let temp = root;

  // Inorder traversal of a binary tree
  function inorder(temp)
  {
      if (temp == null)
          return;

      inorder(temp.left);
      console.log(temp.key + " ");
      inorder(temp.right);
  }

  // Function to delete deepest
  // element in binary tree
  function deleteDeepest(root, delNode)
  {
      let q = [];
      q.push(root);

      let temp = null;

      // Do level order traversal until last node
      while (q.length > 0)
      {
          temp = q[0];
          q.shift();

          if (temp == delNode)
          {
              temp = null;
              return;

          }
          if (temp.right!=null)
          {
              if (temp.right == delNode)
              {
                  temp.right = null;
                  return;
          }
          else
              q.push(temp.right);
      }

      if (temp.left != null)
      {
          if (temp.left == delNode)
          {
              temp.left = null;
              return;
          }
          else
              q.push(temp.left);
      }
  }
  }

  // Function to delete given element
  // in binary tree
  function Delete(root, key)
  {
      if (root == null)
          return;

      if (root.left == null &&
         root.right == null)
      {
          if (root.key == key)
          {
                root=null;
                return;
          }
          else
              return;
      }

      let q = [];
      q.push(root);
      let temp = null, keyNode = null;

      // Do level order traversal until
      // we find key and last node.
      while (q.length > 0)
      {
          temp = q[0];
          q.shift();

          if (temp.key == key)
              keyNode = temp;

          if (temp.left != null)
              q.push(temp.left);

          if (temp.right != null)
              q.push(temp.right);
      }

      if (keyNode != null)
      {
          let x = temp.key;
          deleteDeepest(root, temp);
          keyNode.key = x;
      }
  }
   
  root = new Node(10);
  root.left = new Node(11);
  root.left.left = new Node(7);
  root.left.right = new Node(12);
  root.right = new Node(9);
  root.right.left = new Node(15);
  root.right.right = new Node(8);

  console.log("Inorder traversal " +
                   "before deletion : ");
  inorder(root);

  let key = 11;
  Delete(root, key);

  console.log( "Inorder traversal " +
                   "after deletion : ");
  inorder(root);
