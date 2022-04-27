import Card from '../Home/Section_1/Card'


const Allproducts = ({ allproducts }) => {






    return (
        <>
            <div className='container'>
                <div className='row justify-content-center pt-5'>

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