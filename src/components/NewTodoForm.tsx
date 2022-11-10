
interface NewTodoFormProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const NewTodoForm = ({value, onChange, handleClick}:NewTodoFormProps) => {
    return(
        <>
            <input
            type="text"
            placeholder="New Todo"
            value={value}
            onChange={onChange}
            />
            <button onClick={handleClick}> Add Todo </button>
        </>
    );
};

export default NewTodoForm;