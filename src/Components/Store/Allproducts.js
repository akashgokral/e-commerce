import Card from '../Home/Section_1/Card'


const Allproducts = ({ allproducts }) => {






    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>

                    {
                        allproducts.map((item) => {
                            return (
                                <>
                                    <Card key={item.id} title={item.title} imgurl={item.imgurl} price={item.price} />
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Allproducts