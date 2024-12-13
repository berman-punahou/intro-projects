import React from 'react';

const Header = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                    <a class="navbar-brand d-flex align-items-center" href="https://www.punahou.edu" target="_blank">
                        <img src="hala_yellow.png" alt="Yellow Hala Logo" height="40" class="me-2">
                    </a>
                    <a class="navbar-brand d-flex align-items-center" href="https://www.punahou.edu/design-technology-and-engineering" target="_blank">
                        <img src="DTE.png" alt="DTE Logo" height="40">
                    </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Header;
