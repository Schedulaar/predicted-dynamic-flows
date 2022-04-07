export default {"network": {"nodes": [{"id": 0, "x": 0.0, "y": 0.0}, {"id": 1, "x": 1.0, "y": 0.0}, {"id": 2, "x": 0.0, "y": 1.0}, {"id": 3, "x": 1.0, "y": 1.0}], "edges": [{"id": 0, "from": 0, "to": 1, "capacity": 2.0, "transitTime": 1.0}, {"id": 1, "from": 0, "to": 2, "capacity": 1.0, "transitTime": 3.0}, {"id": 2, "from": 1, "to": 3, "capacity": 2.0, "transitTime": 1.0}, {"id": 3, "from": 3, "to": 0, "capacity": 1.0, "transitTime": 1.0}, {"id": 4, "from": 3, "to": 2, "capacity": 1.0, "transitTime": 1.0}], "commodities": [{"id": 0, "color": "blue"}, {"id": 1, "color": "red"}, {"id": 2, "color": "green"}, {"id": 3, "color": "orange"}, {"id": 4, "color": "black"}]}, "flow": {"inflow": [[{"times": [0.0, 25.0], "values": [0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.25, 3.25, 3.5, 3.75, 4.25, 25.0], "values": [0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.5, 0.25, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.75, 3.0, 3.5, 3.75, 4.25, 4.5, 4.75, 5.0, 5.25, 5.75, 6.0, 7.0, 7.25, 7.5, 8.0, 8.25, 9.25, 9.5, 9.75, 10.25, 10.5, 11.5, 11.75, 12.0, 12.5, 12.75, 13.0, 13.75, 14.0, 14.25, 14.75, 15.25, 16.0, 16.25, 16.5, 17.0, 17.5, 18.25, 18.5, 18.75, 19.25, 19.75, 20.5, 20.75, 21.0, 21.5, 22.0, 22.75, 23.0, 23.25, 23.75, 24.25, 25.0], "values": [0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 3.75, 4.75, 5.0, 5.25, 5.75, 6.0, 7.0, 7.25, 7.5, 8.0, 8.25, 8.5, 9.25, 9.5, 9.75, 10.25, 10.75, 11.5, 11.75, 12.0, 12.5, 13.0, 13.75, 14.0, 14.25, 14.75, 15.25, 16.0, 16.25, 16.5, 17.0, 17.5, 18.25, 18.5, 18.75, 19.25, 19.75, 20.5, 20.75, 21.0, 21.5, 22.0, 22.75, 23.0, 23.25, 23.75, 24.25, 25.0], "values": [0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0], "values": [0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0], "domain": [0.0, Infinity]}], [{"times": [0.0, 25.0], "values": [0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.25, 3.25, 3.5, 3.75, 4.25], "values": [0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.25, 0.0, 0.25, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.75, 3.0, 3.5, 3.75, 4.25, 4.5, 4.75, 5.0, 5.25, 5.75, 6.0, 7.0, 7.25, 7.5, 8.0, 8.25, 9.25, 9.5, 9.75, 10.25, 10.5, 11.5, 11.75, 12.0, 12.5, 12.75, 13.0, 13.75, 14.0, 14.25, 14.75, 15.25, 16.0, 16.25, 16.5, 17.0, 17.5, 18.25, 18.5, 18.75, 19.25, 19.75, 20.5, 20.75, 21.0, 21.5, 22.0, 22.75, 23.0, 23.25, 23.75, 24.25], "values": [0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 3.75, 4.75, 5.0, 5.25, 5.75, 6.0, 7.0, 7.25, 7.5, 8.0, 8.25, 8.5, 9.25, 9.5, 9.75, 10.25, 10.75, 11.5, 11.75, 12.0, 12.5, 13.0, 13.75, 14.0, 14.25, 14.75, 15.25, 16.0, 16.25, 16.5, 17.0, 17.5, 18.25, 18.5, 18.75, 19.25, 19.75, 20.5, 20.75, 21.0, 21.5, 22.0, 22.75, 23.0, 23.25, 23.75, 24.25], "values": [0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.25, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 0.25, 0.5, 0.75, 1.25, 1.5, 2.0, 25.0], "values": [0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}], [{"times": [0.0, 1.0, 1.25, 1.53125, 1.5357142857142856, 1.75, 2.3125, 2.321428571428571, 2.5, 3.0625, 3.0714285714285716, 26.0], "values": [0.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.25, 4.25, 4.5, 4.75, 5.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.25, 0.5, 0.25, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.75, 4.0, 4.5, 4.75, 5.25, 5.5, 5.75, 6.0, 6.25, 6.75, 7.0, 8.0, 8.25, 8.5, 9.0, 9.25, 10.25, 10.5, 10.75, 11.25, 11.5, 12.5, 12.75, 13.0, 13.5, 13.75, 14.0, 14.75, 15.0, 15.25, 15.75, 16.25, 17.0, 17.25, 17.5, 18.0, 18.5, 19.25, 19.5, 19.75, 20.25, 20.75, 21.5, 21.75, 22.0, 22.5, 23.0, 23.75, 24.0, 24.25, 24.75, 25.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.25, 3.5, 3.75, 4.0, 4.5, 4.75, 5.75, 6.0, 6.25, 6.75, 7.0, 8.0, 8.25, 8.5, 9.0, 9.25, 9.5, 10.25, 10.5, 10.75, 11.25, 11.75, 12.5, 12.75, 13.0, 13.5, 14.0, 14.75, 15.0, 15.25, 15.75, 16.25, 17.0, 17.25, 17.5, 18.0, 18.5, 19.25, 19.5, 19.75, 20.25, 20.75, 21.5, 21.75, 22.0, 22.5, 23.0, 23.75, 24.0, 24.25, 24.75, 25.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0], "domain": [0.0, Infinity]}], [{"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}], [{"times": [0.0, 2.0, 2.25, 2.53125, 2.5357142857142856, 2.75, 3.3125, 3.321428571428571, 3.5, 4.0625, 4.071428571428571, 27.0], "values": [0.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.25, 5.25, 5.5, 5.75, 6.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.25, 0.5, 0.25, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.75, 5.0, 5.5, 5.75, 6.25, 6.5, 6.75, 7.0, 7.25, 7.75, 8.0, 9.0, 9.25, 9.5, 10.0, 10.25, 11.25, 11.5, 11.75, 12.25, 12.5, 13.5, 13.75, 14.0, 14.5, 14.75, 15.0, 15.75, 16.0, 16.25, 16.75, 17.25, 18.0, 18.25, 18.5, 19.0, 19.5, 20.25, 20.5, 20.75, 21.25, 21.75, 22.5, 22.75, 23.0, 23.5, 24.0, 24.75, 25.0, 25.25, 25.75, 26.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.25, 4.5, 4.75, 5.0, 5.5, 5.75, 6.75, 7.0, 7.25, 7.75, 8.0, 9.0, 9.25, 9.5, 10.0, 10.25, 10.5, 11.25, 11.5, 11.75, 12.25, 12.75, 13.5, 13.75, 14.0, 14.5, 15.0, 15.75, 16.0, 16.25, 16.75, 17.25, 18.0, 18.25, 18.5, 19.0, 19.5, 20.25, 20.5, 20.75, 21.25, 21.75, 22.5, 22.75, 23.0, 23.5, 24.0, 24.75, 25.0, 25.25, 25.75, 26.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0], "domain": [0.0, Infinity]}]], "outflow": [[{"times": [0.0, 1.0, 1.25, 1.53125, 1.5357142857142856, 1.75, 2.3125, 2.321428571428571, 2.5, 3.0625, 3.0714285714285716, 26.0], "values": [0.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.25, 4.25, 4.5, 4.75, 5.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.25, 0.5, 0.25, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.75, 4.0, 4.5, 4.75, 5.25, 5.5, 5.75, 6.0, 6.25, 6.75, 7.0, 8.0, 8.25, 8.5, 9.0, 9.25, 10.25, 10.5, 10.75, 11.25, 11.5, 12.5, 12.75, 13.0, 13.5, 13.75, 14.0, 14.75, 15.0, 15.25, 15.75, 16.25, 17.0, 17.25, 17.5, 18.0, 18.5, 19.25, 19.5, 19.75, 20.25, 20.75, 21.5, 21.75, 22.0, 22.5, 23.0, 23.75, 24.0, 24.25, 24.75, 25.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625, 3.25, 3.5, 3.75, 4.0, 4.5, 4.75, 5.75, 6.0, 6.25, 6.75, 7.0, 8.0, 8.25, 8.5, 9.0, 9.25, 9.5, 10.25, 10.5, 10.75, 11.25, 11.75, 12.5, 12.75, 13.0, 13.5, 14.0, 14.75, 15.0, 15.25, 15.75, 16.25, 17.0, 17.25, 17.5, 18.0, 18.5, 19.25, 19.5, 19.75, 20.25, 20.75, 21.5, 21.75, 22.0, 22.5, 23.0, 23.75, 24.0, 24.25, 24.75, 25.25, 26.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 1.0, 1.25, 1.53125, 1.75, 2.3125, 2.5, 3.0625], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0], "domain": [0.0, Infinity]}], [{"times": [0.0, 3.0, 3.3125, 3.3333333333333335, 3.5, 4.0625, 4.166666666666667, 4.25, 4.8125, 4.916666666666667, 5.0, 5.5625, 5.875, 6.3125, 6.5, 6.9375, 7.4375, 7.625, 8.625, 8.9375, 9.375, 9.5625, 10.0, 10.375, 10.8125, 11.5625, 12.0, 12.1875, 13.0625, 13.25, 13.625, 14.9375, 15.125, 15.5625, 15.9375, 16.375, 16.6875, 17.25, 17.6875, 17.875, 18.75, 18.9375, 19.1875, 20.5, 20.6875, 21.125, 21.5, 22.375, 22.9375, 23.375, 23.5625, 24.4375, 24.8125, 26.125, 26.3125, 26.75, 27.125, 28.0, 28.5625, 29.0, 29.1875, 30.0625, 30.4375, 31.75, 31.9375, 32.375, 32.75, 33.625, 34.1875], "values": [0.0, 0.2, 1.0, 0.25, 0.1111111111111111, 1.0, 0.25, 0.1111111111111111, 1.0, 0.25, 0.1111111111111111, 0.2, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.125, 0.3333333333333333, 0.125, 0.2, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.16666666666666666, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.2, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.25, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.5, 4.0625, 4.25, 4.8125, 5.0, 5.5625, 6.9375, 7.4375, 7.625, 8.625], "values": [0.0, 0.2, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.125, 0.0, 0.125, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.5, 4.0625, 4.25, 4.8125, 5.0, 5.5625, 5.875, 6.3125, 6.5, 6.9375, 7.4375, 7.625, 8.625, 8.9375, 9.375, 9.5625, 10.0, 10.375, 10.8125, 11.5625, 12.0, 12.1875, 13.0625, 13.25, 13.625, 14.9375, 15.125, 15.5625, 15.9375, 16.375, 17.25, 17.6875, 17.875, 18.75, 18.9375, 19.1875, 20.5, 20.6875, 21.125, 21.5, 22.375, 22.9375, 23.375, 23.5625, 24.4375, 24.8125, 26.125, 26.3125, 26.75, 27.125, 28.0, 28.5625, 29.0, 29.1875, 30.0625, 30.4375, 31.75, 31.9375, 32.375, 32.75, 33.625], "values": [0.0, 0.2, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.4, 0.2857142857142857, 0.0, 0.2857142857142857, 0.25, 0.0, 0.25, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.3333333333333333, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.25, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.5, 4.0625, 4.25, 4.8125, 5.0, 5.5625, 5.875, 6.3125, 6.5, 6.9375, 7.4375, 7.625, 8.625, 8.9375, 9.375, 9.5625, 10.0, 10.375, 10.8125, 11.5625, 12.0, 12.1875, 13.0625, 13.25, 13.625, 14.9375, 15.125, 15.5625, 15.9375, 16.375, 16.6875, 17.25, 17.6875, 17.875, 18.75, 19.1875, 20.5, 20.6875, 21.125, 21.5, 22.375, 22.9375, 23.375, 23.5625, 24.4375, 24.8125, 26.125, 26.3125, 26.75, 27.125, 28.0, 28.5625, 29.0, 29.1875, 30.0625, 30.4375, 31.75, 31.9375, 32.375, 32.75, 33.625], "values": [0.0, 0.2, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.25, 0.0, 0.25, 0.4, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.16666666666666666, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.4, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.5, 4.0625, 4.25, 4.8125, 5.0, 5.5625, 5.875, 6.3125, 6.5, 6.9375, 7.4375, 7.625, 8.625, 8.9375, 9.375, 9.5625, 10.0, 10.375, 10.8125, 11.5625, 12.0, 12.1875, 13.0625, 13.25, 13.625, 14.9375, 15.125, 15.5625, 15.9375, 16.375, 16.6875, 17.25, 17.6875, 17.875, 18.75, 18.9375, 19.1875, 20.5, 20.6875, 21.125, 21.5, 22.375, 22.9375, 23.375, 23.5625, 24.4375, 24.8125, 26.125, 26.3125, 26.75, 27.125, 28.0, 28.5625, 29.0, 29.1875, 30.0625, 30.4375, 31.75, 31.9375, 32.375, 32.75, 33.625, 34.1875], "values": [0.0, 0.2, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.4, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.25, 0.6666666666666666, 0.25, 0.4, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.3333333333333333, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.4, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.5, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0], "domain": [0.0, Infinity]}], [{"times": [0.0, 2.0, 2.25, 2.53125, 2.5357142857142856, 2.75, 3.3125, 3.321428571428571, 3.5, 4.0625, 4.071428571428571, 27.0], "values": [0.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0.2222222222222222, 2.0, 0.25, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.25, 5.25, 5.5, 5.75, 6.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.25, 0.5, 0.25, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.75, 5.0, 5.5, 5.75, 6.25, 6.5, 6.75, 7.0, 7.25, 7.75, 8.0, 9.0, 9.25, 9.5, 10.0, 10.25, 11.25, 11.5, 11.75, 12.25, 12.5, 13.5, 13.75, 14.0, 14.5, 14.75, 15.0, 15.75, 16.0, 16.25, 16.75, 17.25, 18.0, 18.25, 18.5, 19.0, 19.5, 20.25, 20.5, 20.75, 21.25, 21.75, 22.5, 22.75, 23.0, 23.5, 24.0, 24.75, 25.0, 25.25, 25.75, 26.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625, 4.25, 4.5, 4.75, 5.0, 5.5, 5.75, 6.75, 7.0, 7.25, 7.75, 8.0, 9.0, 9.25, 9.5, 10.0, 10.25, 10.5, 11.25, 11.5, 11.75, 12.25, 12.75, 13.5, 13.75, 14.0, 14.5, 15.0, 15.75, 16.0, 16.25, 16.75, 17.25, 18.0, 18.25, 18.5, 19.0, 19.5, 20.25, 20.5, 20.75, 21.25, 21.75, 22.5, 22.75, 23.0, 23.5, 24.0, 24.75, 25.0, 25.25, 25.75, 26.25, 27.0], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.25, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.53125, 2.75, 3.3125, 3.5, 4.0625], "values": [0.0, 0.25, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0, 0.4444444444444444, 0.0], "domain": [0.0, Infinity]}], [{"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}, {"times": [0.0], "values": [0.0], "domain": [0.0, Infinity]}], [{"times": [0.0, 3.0, 3.3125, 3.875, 3.9375, 5.0625, 5.124999999999999, 6.249999999999999, 6.312499999999999, 6.624999999999999, 6.812499999999999, 7.249999999999999, 7.437499999999999, 7.562499999999999, 7.999999999999999, 8.25, 8.5625, 8.75, 9.187499999999998, 9.374999999999998, 10.249999999999998, 10.437499999999998, 12.1875, 12.375, 12.8125, 13.1875, 13.625, 13.875, 14.4375, 14.875, 15.0625, 15.9375, 16.125, 16.4375, 17.75, 17.9375, 18.375, 18.75, 19.1875, 19.5625, 20.125, 20.5625, 20.75, 21.625, 22.0, 23.3125, 23.5, 23.9375, 24.3125, 25.1875, 25.75, 26.1875, 26.375, 27.25, 27.625, 28.9375, 29.125, 29.5625, 29.9375, 30.8125, 31.375, 31.8125, 32.0, 32.875, 33.25, 34.5625], "values": [0.0, 0.2, 0.1111111111111111, 1.0, 0.1111111111111111, 1.0, 0.1111111111111111, 1.0, 0.2, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.5, 0.14285714285714285, 0.5, 0.2, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.25, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.2, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.16666666666666666, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0.3333333333333333, 0.14285714285714285, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.875, 3.9375, 5.0625, 5.124999999999999, 6.249999999999999, 6.312499999999999, 6.624999999999999, 6.812499999999999, 7.249999999999999, 7.437499999999999, 7.562499999999999, 7.999999999999999, 8.25, 8.5625, 8.75, 9.187499999999998, 9.374999999999998, 10.249999999999998, 10.437499999999998, 12.1875, 12.375, 12.8125, 13.1875, 13.625, 13.875, 14.4375, 14.875, 15.0625, 15.9375, 16.125, 16.4375, 17.75, 17.9375, 18.375, 18.75, 19.1875, 19.5625, 20.125, 20.5625, 20.75, 21.625, 22.0, 23.3125, 23.5, 23.9375, 24.3125, 25.1875, 25.75, 26.1875, 26.375, 27.25, 27.625, 28.9375, 29.125, 29.5625, 29.9375, 30.8125, 31.375, 31.8125, 32.0, 32.875, 33.25, 34.5625], "values": [0.0, 0.2, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.4, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.5, 0.2857142857142857, 0.5, 0.4, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.5, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.4, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.3333333333333333, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0.6666666666666666, 0.2857142857142857, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.875, 3.9375, 5.0625, 5.124999999999999, 6.249999999999999, 6.812499999999999, 7.249999999999999, 7.562499999999999, 7.999999999999999, 8.25, 8.5625, 8.75, 9.187499999999998, 9.374999999999998, 10.249999999999998, 10.437499999999998, 12.1875, 12.375, 12.8125, 13.1875, 13.625, 14.4375, 14.875, 15.0625, 15.9375, 16.125, 16.4375, 17.75, 17.9375, 18.375, 18.75, 19.1875, 19.5625, 20.125, 20.5625, 20.75, 21.625, 22.0, 23.3125, 23.5, 23.9375, 24.3125, 25.1875, 25.75, 26.1875, 26.375, 27.25, 27.625, 28.9375, 29.125, 29.5625, 29.9375, 30.8125, 31.375, 31.8125, 32.0, 32.875, 33.25, 34.5625], "values": [0.0, 0.2, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.4, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.4, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.16666666666666666, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.875, 3.9375, 5.0625, 5.124999999999999, 6.249999999999999, 6.312499999999999, 6.624999999999999, 6.812499999999999, 7.249999999999999, 7.562499999999999, 7.999999999999999, 8.75, 9.187499999999998, 9.374999999999998, 10.249999999999998, 10.437499999999998, 12.1875, 12.375, 12.8125, 13.1875, 13.625, 13.875, 14.4375, 14.875, 15.0625, 15.9375, 16.4375, 17.75, 17.9375, 18.375, 18.75, 19.1875, 19.5625, 20.125, 20.5625, 20.75, 21.625, 22.0, 23.3125, 23.5, 23.9375, 24.3125, 25.1875, 25.75, 26.1875, 26.375, 27.25, 27.625, 28.9375, 29.125, 29.5625, 29.9375, 30.8125, 31.375, 31.8125, 32.0, 32.875, 33.25, 34.5625], "values": [0.0, 0.2, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.4, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.25, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.3333333333333333, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0.0, 0.2857142857142857, 0], "domain": [0.0, Infinity]}, {"times": [0.0, 3.0, 3.3125, 3.875, 3.9375, 5.0625, 5.124999999999999, 6.249999999999999], "values": [0.0, 0.2, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0, 0.2222222222222222, 0.0], "domain": [0.0, Infinity]}]], "queues": [{"times": [0.0, 0.25, 0.5, 0.5357142857142857, 0.75, 1.25, 1.3214285714285714, 1.5, 2.0, 2.0714285714285716], "values": [0.0, 0.0, 0.0625, 0.0, 0.0, 0.125, 0.0, 0.0, 0.125, 0.0], "first_slope": 0.0, "last_slope": 0.0, "domain": [-Infinity, Infinity]}, {"times": [0.0, 0.25, 0.3333333333333333, 0.5, 0.75, 1.1666666666666667, 1.25, 1.5, 1.9166666666666667, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.25, 4.5, 4.75, 5.0, 5.25, 5.75, 6.0, 7.0, 7.25, 7.5, 8.0, 8.25, 8.5, 9.25, 9.5, 9.75, 10.25, 10.5, 10.75, 11.5, 11.75, 12.0, 12.5, 12.75, 13.0, 13.75, 14.0, 14.25, 14.75, 15.25, 16.0, 16.25, 16.5, 17.0, 17.5, 18.25, 18.5, 18.75, 19.25, 19.75, 20.5, 20.75, 21.0, 21.5, 22.0, 22.75, 23.0, 23.25, 23.75, 24.25, 25.0, 31.1875], "values": [0.0, 0.0625, 0.0, 0.0, 0.3125, 0.0, 0.0, 0.3125, 0.0, 0.0, 0.3125, 0.375, 0.5625, 0.5, 0.6875, 0.9375, 0.875, 1.375, 1.4375, 1.625, 1.5625, 1.75, 1.625, 1.8125, 1.5625, 1.75, 1.6875, 2.0625, 2.0, 2.125, 2.6875, 2.625, 2.8125, 2.6875, 2.875, 2.9375, 2.75, 2.9375, 2.875, 3.25, 3.1875, 3.1875, 3.75, 3.6875, 3.875, 3.75, 4.125, 3.9375, 4.125, 4.0625, 4.4375, 4.3125, 4.875, 4.8125, 5.0, 4.875, 5.25, 5.0625, 5.25, 5.1875, 5.5625, 5.4375, 6.0, 5.9375, 6.125, 6.0, 6.375, 6.1875, 0.0], "first_slope": 0.0, "last_slope": 0.0, "domain": [-Infinity, Infinity]}, {"times": [0.0], "values": [0.0], "first_slope": 0.0, "last_slope": 0.0, "domain": [-Infinity, Infinity]}, {"times": [0.0], "values": [0.0], "first_slope": 0.0, "last_slope": 0.0, "domain": [-Infinity, Infinity]}, {"times": [0.0, 2.0, 2.25, 2.5357142857142856, 2.75, 3.321428571428571, 3.5, 4.071428571428571, 4.25, 4.5, 4.75, 5.0, 5.25, 5.5, 5.75, 6.25, 6.5, 6.75, 7.0, 7.25, 7.75, 8.0, 9.0, 9.25, 9.5, 10.0, 10.25, 10.5, 11.25, 11.5, 11.75, 12.25, 12.5, 12.75, 13.5, 13.75, 14.0, 14.5, 14.75, 15.0, 15.75, 16.0, 16.25, 16.75, 17.25, 18.0, 18.25, 18.5, 19.0, 19.5, 20.25, 20.5, 20.75, 21.25, 21.75, 22.5, 22.75, 23.0, 23.5, 24.0, 24.75, 25.0, 25.25, 25.75, 26.25, 27.0, 33.5625], "values": [0.0, 0.0, 0.0625, 0.3482142857142856, 0.18749999999999978, 0.758928571428571, 0.6249999999999993, 1.1964285714285705, 1.062499999999999, 1.124999999999999, 1.062499999999999, 1.249999999999999, 1.187499999999999, 1.062499999999999, 1.249999999999999, 0.9999999999999989, 1.062499999999999, 0.9999999999999989, 1.187499999999999, 1.124999999999999, 1.499999999999999, 1.437499999999999, 2.187499999999999, 2.124999999999999, 2.312499999999999, 2.187499999999999, 2.374999999999999, 2.374999999999999, 2.187499999999999, 2.374999999999999, 2.312499999999999, 2.687499999999999, 2.624999999999999, 2.687499999999999, 3.249999999999999, 3.187499999999999, 3.374999999999999, 3.249999999999999, 3.437499999999999, 3.562499999999999, 3.374999999999999, 3.562499999999999, 3.499999999999999, 3.874999999999999, 3.749999999999999, 4.312499999999999, 4.249999999999999, 4.437499999999999, 4.312499999999999, 4.687499999999999, 4.499999999999999, 4.687499999999999, 4.624999999999999, 4.999999999999999, 4.874999999999999, 5.437499999999999, 5.374999999999999, 5.562499999999999, 5.437499999999999, 5.812499999999999, 5.624999999999999, 5.812499999999999, 5.749999999999999, 6.124999999999999, 5.999999999999999, 6.562499999999999, 0.0], "first_slope": 0.0, "last_slope": 0.0, "domain": [-Infinity, Infinity]}]}}