


function BtnTitle({ statusOfBtns, deciderForBtnTitles }) {
    
    

    return (
    <>
        <div className="container-btns">
            <div className={ deciderForBtnTitles ? "btn clicked": "btn notclicked"} onClick= {() => {
                if(deciderForBtnTitles){
                    return
                }else{
                    statusOfBtns(true)
                }
            } }>
                سرمایه گذاری در بورس
            </div>
            <div className={ deciderForBtnTitles ? "btn notclicked" : "btn clicked"} onClick= {() => {
                if(deciderForBtnTitles){
                    statusOfBtns(false)
                }else{
                    return
                }
            } }>
                سرمایه گذاری در ارزدیجیتال
            </div>
        </div>
    </>
  )
  
}

export default BtnTitle;
