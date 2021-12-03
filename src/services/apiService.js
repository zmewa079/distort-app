function getSuggestions(name, type) {
  return fetch(`/api/tasteDiveApi/${name}/${type}`)
  .then(res => res.json())
}

export {getSuggestions}