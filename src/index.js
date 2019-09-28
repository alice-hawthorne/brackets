module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let newarr = [];
  let open = [];
  let close = [];

for (let elem of bracketsConfig) {
  if (elem.includes('|') || elem.includes('7') || elem.includes('8')) {
    close.push(elem[0], elem[1]);
  } else {
    open.push(elem[0]);
    close.push(elem[1]);
  }
}

for (let item of arr) {
  if (open.includes(item)) {
    newarr.push(item);
  };
  if (close.includes(item)) {
    let pair = open[close.indexOf(item)];
    if (newarr.length > 0 && (newarr[newarr.length-1] === pair || newarr[newarr.length-1] === item)) {
      newarr.splice(-1, 1);
    } else {
      newarr.push(item);
    }
  }
}

return (newarr.length === 0);

}