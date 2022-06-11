import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Records from "./citiesList.json";

function Signup(props) {
    const [formsubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        tnCAgreed: false,
    });

    const [formDataErrors, setFormDataErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        tnCAgreed: "",
    });

    const validate = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // console.log("Validate");

        const nameRegex = /^[a-zA-Z0-9]{2,32}$/i;
        const emailRegex = /^[a-zA-Z0-9]{1,15}[.]*[a-zA-Z0-9]{1,15}[@][a-zA-Z0-9]{2,8}[.][a-zA-Z0-9]{1,8}[.]*[a-zA-Z0-9]{1,8}$/i;
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*_+\-"'<>,.?;:|`]{8,16}$/;

        let { name, email, password, confirmPassword, gender, city, tnCAgreed } = formData;

        // validation for name
        if (name === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                name: "Required",
            }));
        }
        else if(!nameRegex.test(name)){
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                name: "Please enter a valid name",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                name: '',
            }));
        }

        // validation for email
        if (email === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                email: "Required",
            }));
        }
        else if(!emailRegex.test(email)){
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                email: "Please enter a valid email",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                email: '',
            }));
        }

        // validation for password
        if (password === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                password: "Required",
            }));
        }
        else if(!passwordRegex.test(password)){
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                password: "Please enter a strong password",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                password: '',
            }));
        }

        // validation for confirm password
        if (confirmPassword === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                confirmPassword: "Required",
            }));
        }
        else if(confirmPassword !== password){
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                confirmPassword: "Password does not match",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                confirmPassword: '',
            }));
        }

        // validation for gender
        if (gender === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                gender: "Please select a gender",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                gender: '',
            }));
        }

        // validation for city
        if (city === "") {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                city: "Please select a city",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                city: '',
            }));
        }

        // validation for tnCAgreed
        if (tnCAgreed === false) {
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                tnCAgreed: "Please Accept Term & Conditions",
            }));
        }
        else{
            setFormDataErrors((formDataErrors) => ({
                ...formDataErrors,
                tnCAgreed: '',
            }));
        }

    };

    // useEffect(() => {
    //     validate();
    // }, [formData]);

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [gender, setGender] = useState('');
    // const [city, setCity] = useState('');

    return (
        <Form style={{ width: "500px", margin: "50px auto" }}>
            <h1 className='display-4'>Sign Up</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.name? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.name? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.name}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.email? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.email? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.email}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.password? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.password? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.password}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                />
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.confirmPassword? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.confirmPassword? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.confirmPassword}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <br />

                {["Male", "Female", "Others"].map((gender, index) => (
                    <Form.Check
                        inline
                        label={gender}
                        name="gender"
                        type="radio"
                        id={`inline-${index}`}
                        onClick={() => setFormData({ ...formData, gender: gender })}
                    />
                ))}
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.gender? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.gender? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.gender}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Select
                    aria-label="Select your city"
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                    <option value="" id="none">
                        Select
                    </option>
                    {Records.map((city, index) => (
                        <option value={city} id={index}>
                            {city}
                        </option>
                    ))}
                </Form.Select>
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.city? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.city? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.city}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Accept the Terms and Conditions"
                    onClick={(e) =>
                        setFormData({ ...formData, tnCAgreed: e.target.checked })
                    }
                />
                {formsubmitted && (
                    <>
                        <Form.Control.Feedback style={ formDataErrors.tnCAgreed? { display: "none" } : { display: "block" }}>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback style={ formDataErrors.tnCAgreed? { display: "block" } : { display: "none" }} type="invalid">
                            {formDataErrors.tnCAgreed}
                        </Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Button
                variant="dark"
                type="submit"
                style={{ width: "100%" }}
                onClick={(e) => validate(e)}
            >
                Sign Up
            </Button>
        </Form>
    );
}

export default Signup;
