function Operations({

    selectedOp,
    operations,
    onSelect
}) {
    return ( 
        <section className="ops-list">            
                {operations.map(op =>                    
                    <button
                        key={op.id}
                        className="calc_key calc_key--operator"
                        onClick={() => {
                            onSelect(op)
                        }}
                    >
                        {op.name}
                    </button>                    
                    )}
        </section>
     );
}

export default Operations;