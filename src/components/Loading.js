import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoadingGif from '../images/loading-animations-preloader-gifs-ui-ux-effects-23.gif'
import './Loading.sass'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props
    if (!loading) return null

    return (
      <div className="loading">
        <img src={ LoadingGif } />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
