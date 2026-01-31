import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import ComboChart from './ComboChart'

const ChartPage = () => {
    return (
        <div>
            <ComboChart/>
            <ColumnChart/>
            <BarChart/>
            <LineChart/>
            <PieChart/>
        </div>
    )
}
export default ChartPage