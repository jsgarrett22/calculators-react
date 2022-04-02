import React from "react";
import '../style.css';
import Header from './Header';
import Display from './Display';
import Footer from './Footer';
import SimpleForm from "./SimpleForm";
import CompoundForm from "./CompoundForm";

export default function App() {
    return (
        <div className="App">
            <div className="row">
                <div className="col">
                    <div className="container">
                        <Header text="Simple Interest"/>
                    </div>
                    <div className="container">
                        <SimpleForm/>
                    </div>
                    <div className="container">
                        <Display/>
                    </div>
                </div>

                <div className="col">
                    <div className="container">
                        <Header text="Compound Interest"/>
                    </div>
                    <div className="container">
                        <CompoundForm/>
                    </div>
                    <div className="container">
                        <Display/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                        <Footer/>
                </div>
            </div>
        </div>
    );
}