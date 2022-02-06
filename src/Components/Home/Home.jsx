import BottomHalf from './BottomHalf'
import TopHalf from './TopHalf'

const Home = () => {
    return (
        <div className="overflow-x-hidden print:text-white print:bg-gray-800">
            <TopHalf />
            <BottomHalf />
        </div>
    )
}

export default Home