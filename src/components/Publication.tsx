import React from "react";
import mlproject from '../assets/images/ML project.png';
import IOT from '../assets/images/IOT.jpg';
import elective from '../assets/images/elective.jpg';
import FYP from '../assets/images/FYP.png';
import portfolio from '../assets/images/portfolio.png'
import '../assets/styles/Project.scss';
import ieee from '../assets/images/ieee.png';

function Publication() {
    return(
    <div className="projects-container" id="publications">
        <h1>Publication</h1>
        <div className="projects-grid">

            {/* <div className="project">
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><h2>Personal Portfolio</h2></a>
                <p>Devoloped a Personal Website to Showcase About Myself. </p>
                <p>Skills: React, scss, TypeScript, Javascript, HTML</p>
            </div> */}

            <div className="project">
                <a href="https://ieeexplore.ieee.org/document/10781986" target="_blank" rel="noreferrer"><img src={ieee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/document/10781986" target="_blank" rel="noreferrer"><h2> Enhancing Credit Card Fraud Detection: A Comparative Analysis of Anomaly Detection Models</h2></a>
                <p><i>2024 IEEE International Conference on Computer Vision and Machine Intelligence (CVMI)</i></p>
                <p>This study leverages deep learning models like autoencoders and RNNs to detect fraudulent transactions, addressing challenges such as evolving threats, class imbalance, and interpretability. The approach outperforms traditional methods in accuracy, adaptability, and data privacy.</p>
                
                <p>Tools: Python, Numpy, Pandas, Matplotlib, Sklearn ,  Python modules: Scikit-learn, NumPy, Pandas, MatPlotLib, SeaBorn, NLTK, XGBoost, LightGBM, CatBoost</p>
            </div>

            <div className="project">
                <a href="https://ieeexplore.ieee.org/document/10725042" target="_blank" rel="noreferrer"><img src={ieee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/document/10725042" target="_blank" rel="noreferrer"><h2>Enhancing Credit Card Fraud Detection with Deep Learning and Graph Neural Networks</h2></a>
                <p><i>2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT), Kamand, India</i></p>
                <p>This study combines deep learning and graph-based techniques for detecting fraudulent transactions. Using Auto-Encoders, RNNs, and algorithms like Louvain Modularity, it improves pattern analysis, accuracy, and adaptability while addressing class imbalance and privacy concerns.</p>
                <p>Tools: Python, Numpy, Pandas, Matplotlib, Sklearn ,  Python modules: Scikit-learn, NumPy, Pandas, MatPlotLib, SeaBorn, NLTK, XGBoost, LightGBM, CatBoost</p>
            </div>

        </div>
    </div>
    );
}

export default Publication;