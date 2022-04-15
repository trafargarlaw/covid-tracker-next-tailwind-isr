import Progress from './Progress'

const ProgressBar = () => {
  return (
    <div className="flex">
      <Progress color="#816bff" percentage={'20'}></Progress>
      <Progress color="#1ee0ac" percentage={'70'}></Progress>
      <Progress color="#e85347" percentage={'10'}></Progress>
    </div>
  )
}

export default ProgressBar
