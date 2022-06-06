var articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "In elementum, sem id tempus lobortis, quam nibh malesuada massa, a aliquet lacus nisi at quam. Duis finibus lectus turpis, eget suscipit nunc tempus nec. Cras ultricies egestas sagittis. In sit amet tincidunt mi, quis tempus tellus. In eget nisi eu nulla venenatis elementum ac eget tortor. Donec id auctor velit, at pharetra libero. Suspendisse fringilla sed orci vitae gravida. Ut dignissim eleifend ultricies. Etiam in elementum mi. Fusce at ultricies sapien, quis ultrices mauris.",
    author: "Zekeriya Eroğlu",
    created_at: "2022-06-05 11:00:00",
  },
  {
    id: 2,
    title: "Vestibulum nec nisl mattis, condimentum augue at, bibendum lorem.",
    content:  "Vestibulum malesuada quam eget elit pretium interdum. Etiam sit amet dapibus nulla. Donec lobortis, nibh posuere consectetur sollicitudin, metus est lacinia leo, sed ultricies mi sapien sed odio. Vestibulum sit amet velit tincidunt, aliquet nunc at, mattis ante. Morbi imperdiet lacus id efficitur mattis. Pellentesque eu viverra lacus. Nullam vitae laoreet erat, sed venenatis ex. Sed quis lacus vitae lacus hendrerit molestie. Duis accumsan neque cursus sapien sollicitudin, vel consequat libero vehicula. Curabitur felis augue, congue eu est et, dictum imperdiet justo. Proin dapibus tortor vel ante bibendum mollis. Vivamus in nulla ante. Donec fringilla sagittis tempus. Quisque fringilla egestas maximus.",
    author: "Zekeriya Eroğlu",
    created_at: "2022-06-05 12:00:00",
  },
  {
    id: 3,
    title: "Nunc id lacinia dui, quis tempor odio.",
    content: "Nunc eleifend fermentum nulla nec euismod. Sed pretium aliquet arcu id varius. Nunc dictum ante tellus, vel facilisis quam condimentum interdum. Cras sit amet volutpat eros, eu mattis metus. Aenean eu aliquam risus, vel scelerisque ipsum. Curabitur vel risus venenatis, blandit ex a, malesuada ipsum. Vivamus eget urna eu libero dapibus vestibulum. Pellentesque neque massa, bibendum vitae faucibus volutpat, posuere consectetur nulla. Nunc velit nulla, pellentesque a ullamcorper id, laoreet sed dolor.",
    author: "Zekeriya Eroğlu",
    created_at: "2022-06-05 13:00:00",
  },
];

export function getArticles() {
  return articles;
}

export function getArticle(id) {
    return articles.find(
        (article) => article.id === id
    );
}
