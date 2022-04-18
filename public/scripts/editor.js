const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
        defaultLevel: 3
      }
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
    list: {
      class: NestedList,
      inlineToolbar: true,
    },
  },
  onReady: () => {
    console.log('Editor.js is ready to work!')
  }
});


let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  editor.save().then((content) => {
    console.log('data: ', content)
  }).catch(error => {
    console.log('error ', error);
  })
})

