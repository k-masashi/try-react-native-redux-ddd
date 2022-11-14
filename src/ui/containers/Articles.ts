import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getArticlesUseCase } from '../../config/inversify.config'
import { AppState } from '../../redux/reducer'
import { Articles } from '../components/Articles'

export const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
})

export const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onMount() {
    dispatch(getArticlesUseCase().execute())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
