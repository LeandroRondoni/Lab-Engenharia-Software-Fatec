export default function BtnCalc({
    selectedNum,
    btns,
    onSelect
}) {
    return (
        <section className="btns-list">            
                {btns.map(btn =>                    
                        <button
                            className="calc_key"
                            key={btn.op}                             
                            onClick={() => {
                            onSelect(btn)
                        }}>
                            {btn.name}
                        </button>
                    )}            
        </section>

    );
}
