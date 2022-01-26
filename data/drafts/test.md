---
title: Test
date: 2021-01-01 09:00
draft: true
---

```js
{
  home ? (
    <>
      <h1
        className="text-xl text-center font-bold my-8">{name}</h1>
    </>
  ) : (
    <>
      <h2
        className="text-xl text-center font-bold my-8">
        <Link
          href="/">
          <a>{name}</a>
        </Link>
      </h2>
    </>
  )
}
```


```javascript
{
        !home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )
      }
```
