function getJson (node) {

  if (!node || !node.tagName || node.tagName === '?xml') {
    return;
  }

  let json = {};
  let children = node.childNodes;
  let hasChildElementNodes = (children || []).some(el => el.tagName);

  if (hasChildElementNodes) {
    children.forEach(child => {
      if (!child.tagName) return;
      let childTagName = child.tagName;
      if (json[childTagName]) {
        if (!Array.isArray(json[childTagName])) {
          json[childTagName] = [json[childTagName]];
        }
        json[childTagName].push(getJson(child));
      } else {
        json[childTagName] = getJson(child);
      }
    });
  } else {
    // this is a leaf, return the text
    return $(node).text();
  }

  return json;

}
