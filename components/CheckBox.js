import BouncyCheckbox from "react-native-bouncy-checkbox";

function CheckBox({ title}) {

    return (
        <>
            <BouncyCheckbox
                size={25}
                fillColor="#1967FB"
                unfillColor="#FFFFFF"
                text={title}
                iconStyle={{ borderColor: "#ffc484" }}
                innerIconStyle={{ borderWidth: 2 }}
            />
        </>
    );
};

export default CheckBox;