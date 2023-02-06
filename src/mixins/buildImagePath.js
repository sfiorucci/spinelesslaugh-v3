export default {
  methods: {
    buildImagePath(path, slug, format) {
      return `https://www.spinelesslaugh.com/${path}/${slug}.${format}`
    }
  }
}