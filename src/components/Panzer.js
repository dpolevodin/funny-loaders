import React from 'react';
import classNames from 'classnames'
import './Panzer.css'

const Panzer = ({size, patrolPathLength = 10, panzerSpeed = 3}) => {
    const componentSize = classNames({
        30: size === 'small',
        60: !size || size === 'normal',
        120: size === 'big',
    })

    return (
        <div className="panzer-wrapper" style={{width: `${patrolPathLength}rem`}}>
            <svg style={{animationDuration: `${panzerSpeed}s`}} className="panzer" width={componentSize} height={componentSize} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="112" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="112" width="8" height="8" fill="#9F7B31"/>
                <rect y="24" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="112" width="8" height="8" fill="#D9D9D9"/>
                <rect y="104" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="104" width="8" height="8" fill="#9F7B31"/>
                <rect y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="104" width="8" height="8" fill="#D9D9D9"/>
                <rect y="96" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="96" width="8" height="8" fill="#9F7B31"/>
                <rect y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="96" width="8" height="8" fill="#D9D9D9"/>
                <rect y="88" width="8" height="8" fill="#9F7B31"/>
                <rect width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="16" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="72" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="56" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="48" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="40" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="32" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="32" width="8" height="8" fill="#9F7B31"/>
                <rect y="32" width="8" height="8" fill="#9F7B31"/>
                <rect x="8" y="88" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="112" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="8" y="24" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="112" width="8" height="8" fill="#E2A954"/>
                <rect x="24" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="40" y="112" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="48" y="112" width="8" height="8" fill="#E2A954"/>
                <rect x="40" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="56" y="112" width="8" height="8" fill="#9F7B31"/>
                <rect x="48" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="64" y="112" width="8" height="8" fill="#E2A954"/>
                <rect x="56" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="72" y="112" width="8" height="8" fill="#9F7B31"/>
                <rect x="64" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="80" y="112" width="8" height="8" fill="#E2A954"/>
                <rect x="72" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="80" y="24" width="8" height="8" fill="#E2A954"/>
                <rect x="112" y="64" width="8" height="8" transform="rotate(-90 112 64)" fill="#EFDD97"/>
                <rect x="8" y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="104" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="16" width="8" height="8" fill="#E2A954"/>
                <rect x="32" y="104" width="8" height="8" fill="#E2A954"/>
                <rect x="24" y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="40" y="104" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="16" width="8" height="8" fill="#E2A954"/>
                <rect x="48" y="104" width="8" height="8" fill="#E2A954"/>
                <rect x="40" y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="56" y="104" width="8" height="8" fill="#9F7B31"/>
                <rect x="48" y="16" width="8" height="8" fill="#E2A954"/>
                <rect x="64" y="104" width="8" height="8" fill="#E2A954"/>
                <rect x="56" y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="104" width="8" height="8" fill="#9F7B31"/>
                <rect x="64" y="16" width="8" height="8" fill="#E2A954"/>
                <rect x="80" y="104" width="8" height="8" fill="#E2A954"/>
                <rect x="72" y="16" width="8" height="8" fill="#9F7B31"/>
                <rect x="80" y="16" width="8" height="8" fill="#E2A954"/>
                <rect x="104" y="64" width="8" height="8" transform="rotate(-90 104 64)" fill="#EFDD97"/>
                <rect x="8" y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="96" width="8" height="8" fill="#9F7B31"/>
                <rect x="16" y="8" width="8" height="8" fill="#E2A954"/>
                <rect x="32" y="96" width="8" height="8" fill="#E2A954"/>
                <rect x="24" y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="40" y="96" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="8" width="8" height="8" fill="#E2A954"/>
                <rect x="48" y="96" width="8" height="8" fill="#E2A954"/>
                <rect x="40" y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="56" y="96" width="8" height="8" fill="#9F7B31"/>
                <rect x="48" y="8" width="8" height="8" fill="#E2A954"/>
                <rect x="64" y="96" width="8" height="8" fill="#E2A954"/>
                <rect x="56" y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="96" width="8" height="8" fill="#9F7B31"/>
                <rect x="64" y="8" width="8" height="8" fill="#E2A954"/>
                <rect x="80" y="96" width="8" height="8" fill="#E2A954"/>
                <rect x="72" y="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="80" y="8" width="8" height="8" fill="#E2A954"/>
                <rect x="96" y="64" width="8" height="8" transform="rotate(-90 96 64)" fill="#EFDD97"/>
                <rect x="8" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="24" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="72" width="8" height="8" fill="#9F7B31"/>
                <rect x="24" y="64" width="8" height="8" fill="#DEAB50"/>
                <rect x="24" y="56" width="8" height="8" fill="#DEAB50"/>
                <rect x="24" y="48" width="8" height="8" fill="#DEAB50"/>
                <rect x="24" y="40" width="8" height="8" fill="#FCD283"/>
                <rect x="24" y="32" width="8" height="8" fill="#FCD283"/>
                <rect x="16" width="8" height="8" fill="#E2A954"/>
                <rect x="32" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="32" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="72" width="8" height="8" fill="#FAD580"/>
                <rect x="32" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="56" width="8" height="8" fill="#9F7B31"/>
                <rect x="32" y="48" width="8" height="8" fill="#DEAB50"/>
                <rect x="32" y="40" width="8" height="8" fill="#DEAB50"/>
                <rect x="32" y="32" width="8" height="8" fill="#FCD283"/>
                <rect x="24" width="8" height="8" fill="#9F7B31"/>
                <rect x="40" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="40" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="40" y="72" width="8" height="8" fill="#FAD580"/>
                <rect x="40" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="40" y="56" width="8" height="8" fill="#E3AB58"/>
                <rect x="40" y="48" width="8" height="8" fill="#FAD580"/>
                <rect x="40" y="40" width="8" height="8" fill="#DEAB50"/>
                <rect x="40" y="32" width="8" height="8" fill="#FCD283"/>
                <rect x="32" width="8" height="8" fill="#E2A954"/>
                <rect x="40" width="8" height="8" fill="#9F7B31"/>
                <rect x="56" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="56" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="56" y="72" width="8" height="8" fill="#FAD580"/>
                <rect x="56" y="64" width="8" height="8" fill="#FAD580"/>
                <rect x="56" y="56" width="8" height="8" fill="#E3AB58"/>
                <rect x="56" y="48" width="8" height="8" fill="#FAD580"/>
                <rect x="56" y="40" width="8" height="8" fill="#DEAB50"/>
                <rect x="56" y="32" width="8" height="8" fill="#FAD580"/>
                <rect x="48" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="48" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="48" y="72" width="8" height="8" fill="#FAD580"/>
                <rect x="48" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="48" y="56" width="8" height="8" fill="#E3AB58"/>
                <rect x="48" y="48" width="8" height="8" fill="#FAD580"/>
                <rect x="48" y="40" width="8" height="8" fill="#DEAB50"/>
                <rect x="48" y="32" width="8" height="8" fill="#FCD283"/>
                <rect x="48" width="8" height="8" fill="#E2A954"/>
                <rect x="64" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="64" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="64" y="72" width="8" height="8" fill="#9F7B31"/>
                <rect x="64" y="64" width="8" height="8" fill="#FAD580"/>
                <rect x="64" y="56" width="8" height="8" fill="#FAD580"/>
                <rect x="64" y="48" width="8" height="8" fill="#FAD580"/>
                <rect x="64" y="40" width="8" height="8" fill="#FAD580"/>
                <rect x="64" y="32" width="8" height="8" fill="#FAD580"/>
                <rect x="56" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="88" width="8" height="8" fill="#E2A954"/>
                <rect x="72" y="80" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="72" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="56" width="8" height="8" fill="#EFDD97"/>
                <rect x="72" y="48" width="8" height="8" fill="#9F7B31"/>
                <rect x="80" y="48" width="8" height="8" fill="#9F7B31"/>
                <rect x="80" y="64" width="8" height="8" fill="#9F7B31"/>
                <rect x="72" y="40" width="8" height="8" fill="#FAD580"/>
                <rect x="72" y="32" width="8" height="8" fill="#FAD580"/>
                <rect x="64" width="8" height="8" fill="#E2A954"/>
                <rect x="80" y="88" width="8" height="8" fill="#F0DCAA"/>
                <rect x="72" width="8" height="8" fill="#9F7B31"/>
                <rect x="80" width="8" height="8" fill="#E2A954"/>
                <rect x="88" y="64" width="8" height="8" transform="rotate(-90 88 64)" fill="#EFDD97"/>
                <rect x="80" y="64" width="8" height="8" transform="rotate(-90 80 64)" fill="#EFDD97"/>
                <rect x="16" y="96" width="8" height="8" fill="#E2A954"/>
                <rect x="16" y="104" width="8" height="8" fill="#E2A954"/>
                <rect x="16" y="112" width="8" height="8" fill="#E2A954"/>
            </svg>
        </div>
    );
};

export default Panzer;