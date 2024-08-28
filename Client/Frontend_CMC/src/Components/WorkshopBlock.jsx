import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/cloud-7786329_1280.png';
import img2 from '../assets/programmer-1653351_1280.png';
import img3 from '../assets/programming-6795536_1280.png';
import orange from '../assets/Orange.png';
import blue from '../assets/Blue.png';

function WorkshopBlock() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="px-24 pb-11">
                <div className="py-16 mb-10">
                    <p>1/ Choose your</p>
                    <p className="text-7xl font-bold mt-5">Workshops</p>
                </div>
                <div className="grid grid-cols-3 w-full gap-6">
                    <div 
                        className="border rounded-3xl p-4 border-black" 
                        data-aos="fade-up" 
                        data-aos-duration="1500" // Slowest
                        data-aos-offset="100"    // Starts lower
                    >
                        <p className="text-xl font-semibold mb-3">Placement Preparation</p>
                        <p>Get your problem solving skills honed from an SDE-1. Questions are solved according to the latest patterns, covering top MNCs like TCS, Accenture, Infosys, and Cognizant.</p>
                        <img src={img1} className='size-72 p-12 mx-auto' alt="Placement Preparation"></img>
                        <div className='mt-2 '>
                            
                            <span>Beginner</span>
                        </div>
                    </div>
                    <div 
                        className="border rounded-3xl p-4 border-black" 
                        data-aos="fade-up" 
                        data-aos-duration="1250" // Medium speed
                        data-aos-offset="200"    // Starts slightly lower
                    >
                        <p className="text-xl font-semibold mb-3">DSA Topicwise</p>
                        <p>Get your DSA topics revised with explanation and coding questions in an hour. Topics covered are Arrays, ArrayList/Vector, HashMaps, HashSets, Strings, Recursion, DP, Linked List, Stack, Queue, Tree</p>
                        <img src={img2} className='size-72 py-12 px-5 rounded-full mx-auto' alt="DSA Topicwise"></img>
                        <div className='mt-2 '>
                            
                            <span>Beginner</span>
                        </div>
                    </div>
                    <div 
                        className="border rounded-3xl p-4 border-black" 
                        data-aos="fade-up" 
                        data-aos-duration="1000"  // Fastest
                        data-aos-offset="300"     // Starts from the highest point
                    >
                        <p className="text-xl font-semibold mb-3">Web Development</p>
                        <p>Learn web dev with hands-on project and get resume ready. Choose any Tech Stack -
                            <li>ReactJs, ExpressJS, NodeJS, MongoDB (MERN)</li>
                            <li>ReactJs, DJANGO, PostgreSQL</li>
                            <li>HTML, CSS, JavaScript</li>
                        </p>
                        <img src={img3} className='size-72 py-12 px-5 mx-auto' alt="Web Development"></img>
                        <div className='mt-2 '>
                            
                            <span>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkshopBlock;
