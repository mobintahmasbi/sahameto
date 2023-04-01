


function BtnTitleMainsize({ statusOfBtns, deciderForBtnTitles }) {
    

    return (
    <>
        <div className="container-btns cb-main-size">
            <div className={ deciderForBtnTitles ? "btn-main-size clicked": "btn-main-size notclicked"} onClick= {() => {
                if(deciderForBtnTitles){
                    return
                }else{
                    statusOfBtns(true)
                    
                }
            } }>
                سرمایه گذاری در بورس
            </div>
            <div className={ deciderForBtnTitles ? "btn-main-size notclicked" : "btn-main-size clicked"} onClick= {() => {
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

export default BtnTitleMainsize;
