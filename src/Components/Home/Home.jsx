import BottomHalf from './BottomHalf'
import TopHalf from './TopHalf'

const Home = () => {
    return (
        <div className="relative overflow-x-hidden text-black dark:text-white bg-white dark:bg-gray-800 transition duration-200 ease-in">
            <TopHalf />
            <BottomHalf />
        </div>
    )
}

export default Home