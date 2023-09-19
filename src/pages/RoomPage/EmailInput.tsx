import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent } from 'primereact/mention';
import { CustomerService } from '../../components/BookingSlot/CustomerService';

export default function FormikDoc() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any[]>([]); // Remove type declaration for customers
    const [suggestions, setSuggestions] = useState<any[]>([]); // Remove type declaration for suggestions

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            // Modify data to add 'nickname' property
            const modifiedData = data.map(d => ({
                ...d,
                nickname: `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`
            }));
            setCustomers(modifiedData);
        });
    }, []);

    const onSearch = (event: MentionSearchEvent) => {
        //in a real application, make a request to a remote URL with the query and return suggestions, for demo we filter at the client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            } else {
                suggestions = customers.filter((customer: any) => {
                    // Filter based on the 'nickname' property
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const inputStyle = {
        width: "100%", // Set the desired width
        height: "10%", // Set the desired height
    };

    return (
        <div className="card flex justify-content-center">
            <Mention
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                suggestions={suggestions}
                onSearch={onSearch}
                field="nickname"
                placeholder="Enter @ to add meeting invitees"
                rows={5}
                cols={40}
                itemTemplate={itemTemplate}
                inputClassName="p-invalid"
                inputStyle={inputStyle}
            />
        </div>
    )
}
