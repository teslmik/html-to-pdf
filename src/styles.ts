import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  document: {
    fontFamily: 'Suisse Intl',
    margin: 0,
    padding: 0
  },
  page: {
    padding: '40px 40px 40px',
    color: '#14142D',
    lineHeight: 1.4,
  },
  h1: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 12,
    fontWeight: 500,
  },
  h2: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 12,
    fontWeight: 500,
  },
  h3: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 12,
    fontWeight: 500,
  },
  i: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 500,
    color: '#14142D',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F4F4F4',
    padding: '26px 105px',
    marginBottom: 12
  },
  image: {
    width: '100%',
    borderRadius: 8
  },
  a: {
    fontSize: 14,
    color: '#0000FF'
  },
  p: {
    fontSize: 14,
    marginBottom: 16,
    color: 'rgba(2, 2, 30, 0.7)',
  },
  li: {
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(2, 2, 30, 0.7)',
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    width: '100%',
    fontSize: 14,
  },
  span: {
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(2, 2, 30, 0.7)',
    width: '100%',
  },
  pageCount: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 500,
    color: "rgba(2, 2, 30, 0.5)",
    paddingTop: 10,
    textAlign: "center",
    bottom: 23,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35
  },
  headerText: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgba(2, 2, 30, 0.5)'
  }
});