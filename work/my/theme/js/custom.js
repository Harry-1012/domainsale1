setTimeout(function () {
  /* 首页post meta发表时间后的 竖线 | */
  let metaList = document.querySelectorAll(
    "#recent-posts .article-meta-wrap .article-meta"
  );
  for (let i = 0; i < metaList.length; i++) {
    if (metaList[i].className.indexOf("tags") > -1) {
    } else {
      metaList[i].getElementsByClassName(
        "article-meta-separator"
      )[0].style.display = "none";
    }
  }
  /* /首页post meta发表时间后的 竖线 | */
}, 686);


/** 隐藏aside右边的文章按钮 */
document.querySelectorAll("a[href='/work/archives/']")[0].style.display = "none"
document.querySelectorAll("a[href='/work/archives/']")[1].style.display = "none"
