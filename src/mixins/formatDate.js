import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'MMMM d, yyyy')
    }
  }
}