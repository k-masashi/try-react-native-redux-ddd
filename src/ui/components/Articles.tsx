import { useEffect } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Article from '../../domain/article'
import { mapDispatchToProps, mapStateToProps } from '../containers/Articles'

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const Articles: React.FC<Props> = ({ articles, onMount }) => {
  useEffect(() => {
    onMount()
  }, [])

  return (
    <View style={styles.sectionContainer}>
      {articles.map(article => {
        return ArticleSection(article)
      })}
    </View>
  )
}

const ArticleSection = (article: Article) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}
      >
        {article.name}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}
      >
        {article.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})
