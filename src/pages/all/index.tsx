import Layout from "@/src/components/layout/layout"
import Table from "@/src/components/table"

const AllTables = () => {
    return (
        <Layout>
        <div className="flex overflow-x-auto  max-h-150 h-150">
            <Table name='users'/>
            <Table name='events'/>
            <Table name='tickets'/>
            <Table name='tags'/>
            <Table name='reviews'/>
        </div>
        </Layout>
        
    )
}

export default AllTables