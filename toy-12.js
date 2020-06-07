Tree.prototype.BFSelect = function(filter) {
  // TODO: Your code here!
  let res = [];

  function recursion(node, depth) {
    if (filter(node.value, depth)) {
      res.push(node.value);
    }
    for (let i = 0; i < node.children.length; i++) {
      recursion(node.children[i], depth + 1);
    }
  }

  recursion(this, 0);
  return res;
};
