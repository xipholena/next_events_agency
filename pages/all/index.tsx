import Layout from "@/components/layout/layout"
import Table from "@/components/table"

const AllTables = () => {
    return (
        <Layout>
        <div className="flex">
            <Table name='users'/>
            <Table name='events'/>
            <Table name='tickets'/>
        </div>
        </Layout>
        
    )
}

export default AllTables