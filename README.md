# node-simple-xml-to-json
Converts a simple xml structure to json. Emphasis on simple. Creates arrays as needed. JSON will look like what you expect and want.  However, attributes are not handled.

There are lots of things it doesn't handle.  It only handles very simple xml, delivering a very direct and intuitive json from it.

Example:

```
<container>
  <foo>bar</foo>
  <baz>
    <title>First Thing</title>
    <description>This is the first thing's description.</description>
  </baz>
  <baz>
    <title>Second Thing</title>
    <description>This is the second thing's description.</description>
  </baz>
</container>
```
->
```
{
  container: {
    foo: "bar",
    baz: [
      {
        title: "First Thing",
        description: "This is the first thing's description."
      },
      {
        title: "Second Thing",
        description: "This is the second thing's description."
      }
    ]
  }
}
```
