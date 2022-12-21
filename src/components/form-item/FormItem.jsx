
const FormItem = ({label, value , onChange , type , suffix}) => {

    if(type === 'checkbox') {
        return (
            <div className="form-group">
                <input
                    onChange={(e) => onChange(e.target.checked)}
                    className="checkbox"
                    checked={value}
                    type="checkbox"
                    id="iHaveIt"
                />
                <label htmlFor="iHaveIt">{label}</label>
            </div>
        )
    }

    return (
        <div className="form-group">
            <label htmlFor="sickLeave">{label}</label>
            <input
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
                value={value}
                type="number"
            />
            {suffix && <span className="suffix">{suffix}</span>}
        </div>
    );
};

export default FormItem;
