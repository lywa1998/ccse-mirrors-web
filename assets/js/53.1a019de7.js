(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{525:function(t,e,s){"use strict";s.r(e);var r=s(11),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"alpine-mirror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alpine-mirror"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"/alpine"}},[t._v("Alpine")]),t._v(" Mirror")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://alpinelinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alpine Linux"),e("OutboundLink")],1),t._v(" is a security-oriented, lightweight Linux distribution based on musl libc and busybox.")])]),t._v(" "),e("p",[t._v("Many people build their Docker images based on "),e("a",{attrs:{href:"https://hub.docker.com/_/alpine",target:"_blank",rel:"noopener noreferrer"}},[t._v("alpine"),e("OutboundLink")],1),t._v(" to reduce the image size.")]),t._v(" "),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Suppose you are using Alpine Linux 3.10. You can write the following line to "),e("code",[t._v("/etc/apk/repositories")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[t._v("https://mirrors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/alpine/v3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("/main\nhttps://mirrors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/alpine/v3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("/community\n")])])]),e("h2",{attrs:{id:"use-mirror-to-build-docker-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-mirror-to-build-docker-image"}},[t._v("#")]),t._v(" Use Mirror to Build Docker Image")]),t._v(" "),e("p",[t._v("You can also specify repositories in a Dockerfile:")]),t._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine:3.10")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" echo "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mirrors.sustech.edu.cn/alpine/v3.10/main"')]),t._v(" > /etc/apk/repositories ; "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    echo "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mirrors.sustech.edu.cn/alpine/v3.10/community"')]),t._v(" >> /etc/apk/repositories ; "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# followed by your wonderful commands")]),t._v("\n")])])])]),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("Note that the first redirection uses "),e("code",[t._v(">")]),t._v(" to overwrite the existing file while the second one uses "),e("code",[t._v(">>")]),t._v(" to append a line.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);