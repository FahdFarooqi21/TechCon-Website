VALID_PASSWORD="PASSWORD"
echo "Enter Password: "
read attempt

if [ "$attempt" = "$VALID_PASSWORD" ]; then
	echo "You have Access."

else
	echo "Access Denied" 
fi
