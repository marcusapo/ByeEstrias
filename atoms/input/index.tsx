import React from "react";
import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { InputBox, TextInput } from "./style";
import { Icon } from "..";
import Button from "../button";

const Input: React.FC<IndexProps> = ({
    value,
    onChangeText,
    label,
    placeholder,
    type = 'text',
    mode = 'default',
    icon,
    autoFocus,
    onFocus,
    onBlur,
    onEnter,
    max,
    step,
    min,
    color,
    id,
    size,
    options,
    list,
    disabled,
    inputmode,
    pattern,
    maxLength,
    displayNone,
    actionButton,
    mt,
    ml,
    mr,
    mb
}) => (
    <BoxCommon width={size} display={displayNone ? 'none' : 'flex'}>
        { label && <h5 className="fontW600 fontNoBreak" style={{ marginBottom: 5 }}>{ label }</h5> }
        <InputBox mode={mode} size={size} color={color} mt={mt} ml={ml} mr={mr} mb={mb}>
            <TextInput
                value={value}
                onChange={e => onChangeText(e.target.value)}
                placeholder={placeholder ?? label}
                type={type}
                autoFocus={autoFocus}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={(e) => onEnter && e.key === 'Enter' ? onEnter() : null}
                max={max}
                step={step}
                min={min}
                id={id}
                list={list}
                disabled={disabled}
                inputMode={inputmode}
                pattern={pattern}
                maxLength={maxLength}
            />
            {
                options && (
                    <datalist id={list}>
                        {
                            options.map((item, index) => (
                                <option
                                    value={item.value}
                                    key={index}
                                >
                                    { item.label }
                                </option>
                            ))
                        }
                    </datalist>
                )
            }
            {
                actionButton && (
                    <Button
                        type='primaryIcon'
                        icon={{
                            name: 'send',
                            fill: 'transparent',
                            size: 30,
                            stroke: 'white'
                        }}
                        text=''
                        onClick={() => disabled ? null : actionButton()}
                        disabled={disabled}
                    />
                )
            }
            {
                icon && (
                    <Icon
                        name={icon.name}
                        fill={icon.fill}
                        size={icon.size}
                        stroke={icon.stroke}
                        mr='10px'
                    />
                )
            }
        </InputBox>
    </BoxCommon>
)

export default Input;