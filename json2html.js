// json2html.js

export default function json2html(data) {
    // Start the HTML string with the table element and data-user attribute
    let html = '<table data-user="ksrajkhg@gmail.com"><thead><tr>';
    
    // Get unique keys from all objects to create table headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
    
    // Add each header as a table heading (th)
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    
    html += '</tr></thead><tbody>';
    
    // Add rows for each data object
    data.forEach(row => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`;
      });
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    
    return html;
  }
  