from flask import Flask, jsonify, request

app = Flask(__name__)

# Example: Get inventory
@app.route('/inventory', methods=['GET'])
def get_inventory():
    return jsonify([{"material_id": "MAT001", "quantity": 100}])

# Example: Add material
@app.route('/inventory', methods=['POST'])
def add_material():
    # TODO: Add validation and database integration
    return jsonify({"message": "Material added"}), 201

if __name__ == "__main__":
    app.run(port=3002)